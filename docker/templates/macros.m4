m4_divert(-1)

m4_define(
    `keep_apt_cache',
    `m4_dnl
rm -f /etc/apt/apt.conf.d/docker-clean && \
    echo Binary::apt::APT::Keep-Downloaded-Packages \"true\"\; \
        > /etc/apt/apt.conf.d/keep-cache')

m4_define(
    `run_with_apt_cache',
    `m4_dnl
RUN --mount=type=cache,target=/var/cache/apt,sharing=locked \
    --mount=type=cache,target=/var/lib/apt,sharing=locked')

m4_define(
    `apt_install',
    `m4_dnl
apt-get update && \
    apt-get install --no-install-suggests --no-install-recommends -y $1')

m4_define(`apt_purge', `apt-get purge --auto-remove -y $1')

m4_define(`sudo_mb', `sudo -E -H -u musicbrainz $1')

m4_define(
    `install_javascript',
    `m4_dnl
COPY docker/nodesource_pubkey.txt /tmp/
copy_mb(``package.json yarn.lock .yarnrc.yml ./'')
run_with_apt_cache \
    cp /tmp/nodesource_pubkey.txt /etc/apt/keyrings/nodesource.asc && \
    rm /tmp/nodesource_pubkey.txt && \
    echo "deb [signed-by=/etc/apt/keyrings/nodesource.asc] https://deb.nodesource.com/node_20.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list && \
    apt_install(``git nodejs python3-minimal'') && \
    corepack enable && \
    sudo_mb(``yarn'')
copy_mb(``babel.config.cjs ./'')')

m4_define(
    `install_javascript_and_templates',
    `m4_dnl
install_javascript

copy_mb(``docker/scripts/compile_resources_for_image.sh docker/scripts/'')
copy_mb(``root/ root/'')
copy_mb(``script/compile_resources.sh script/dbdefs_to_js.pl script/start_renderer.pl script/xgettext.js script/'')
copy_mb(``webpack/ webpack/'')

ENV NODE_ENV production
RUN sudo_mb(``./docker/scripts/compile_resources_for_image.sh'')
RUN chown_mb(``/tmp/ttc'')')

m4_define(
    `mbs_build_deps',
    `m4_dnl
build-essential m4_dnl
libdb-dev m4_dnl
libexpat1-dev m4_dnl
libicu-dev m4_dnl
libperl-dev m4_dnl
libpq-dev m4_dnl
libssl-dev m4_dnl
libxml2-dev m4_dnl
zlib1g-dev m4_dnl
pkg-config')

# postgresql-server-dev-12 provides pg_config, which is needed by InitDb.pl
# at run-time.
m4_define(
    `mbs_run_deps',
    `m4_dnl
bzip2 m4_dnl
ca-certificates m4_dnl
libdb5.3 m4_dnl
libexpat1 m4_dnl
libicu70 m4_dnl
libpq5 m4_dnl
libssl3 m4_dnl
libxml2 m4_dnl
moreutils m4_dnl
perl m4_dnl
postgresql-client-12 m4_dnl
postgresql-server-dev-12 m4_dnl
zlib1g')

m4_define(
    `test_db_run_deps',
    `m4_dnl
carton m4_dnl
postgresql-12-pgtap')

m4_define(
    `test_db_build_deps',
    `m4_dnl
gcc m4_dnl
libc6-dev m4_dnl
make m4_dnl
postgresql-server-dev-12')

m4_define(
    `install_perl_modules',
    `m4_dnl
ENV PERL_CARTON_PATH /home/musicbrainz/carton-local
ENV PERL_CPANM_OPT --notest --no-interactive

COPY docker/pgdg_pubkey.txt /tmp/
run_with_apt_cache \
    cp /tmp/pgdg_pubkey.txt /etc/apt/keyrings/pgdg.asc && \
    rm /tmp/pgdg_pubkey.txt && \
    echo "deb [signed-by=/etc/apt/keyrings/pgdg.asc] http://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list && \
    apt_install(`mbs_build_deps mbs_run_deps') && \
    wget -q -O - https://cpanmin.us | perl - App::cpanminus && \
    cpanm Carton JSON::XS && \
    chown_mb(``$PERL_CARTON_PATH'') && \
    sudo_mb(``carton install$1'') && \
    apt_purge(`mbs_build_deps')')

m4_define(
    `chown_mb',
    `m4_dnl
mkdir -p $1 && \
    chown -R musicbrainz:musicbrainz $1')

m4_define(
    `copy_mb',
    `m4_dnl
COPY --chown=musicbrainz:musicbrainz $1')

m4_define(`MBS_ROOT', `/home/musicbrainz/musicbrainz-server')

m4_define(
    `setup_mbs_root',
    `m4_dnl
RUN useradd --create-home --shell /bin/bash musicbrainz

WORKDIR MBS_ROOT
RUN chown_mb(`MBS_ROOT')')

m4_define(
    `install_translations',
    `m4_dnl
copy_mb(``po/ po/'')
run_with_apt_cache \
    apt_install(``gettext language-pack-de language-pack-el language-pack-es language-pack-et language-pack-fi language-pack-fr language-pack-he language-pack-it language-pack-ja language-pack-nl language-pack-sq make'') && \
    sudo_mb(``make -C po all_quiet'') && \
    sudo_mb(``make -C po deploy'')')

m4_define(
    `copy_common_mbs_files',
    `m4_dnl
copy_mb(``admin/ admin/'')
copy_mb(``app.psgi entities.json entities.mjs ./'')
copy_mb(``bin/ bin/'')
copy_mb(``lib/ lib/'')
copy_mb(``script/functions.sh script/git_info script/'')')

m4_define(
    `git_info',
    `m4_dnl
ENV `GIT_BRANCH' GIT_BRANCH
ENV `GIT_MSG' m4_changequote(`.quote_never_ever_use_in_a_commit_message.', `.end_quote_never_ever_use_in_a_commit_message.')GIT_MSG
m4_changequote`'m4_dnl
ENV `GIT_SHA' GIT_SHA')

m4_define(
    `install_new_xz_utils',
    `m4_dnl
COPY docker/lasse_collin_pubkey.txt /tmp/

run_with_apt_cache \
    apt_install(``autoconf automake build-essential gettext libtool'') && \
    cd /tmp && \
    sudo_mb(``gpg --import lasse_collin_pubkey.txt'') && \
    rm lasse_collin_pubkey.txt && \
    wget https://tukaani.org/xz/xz-5.2.3.tar.gz && \
    wget https://tukaani.org/xz/xz-5.2.3.tar.gz.sig && \
    sudo_mb(``gpg --verify xz-5.2.3.tar.gz.sig'') && \
    rm xz-5.2.3.tar.gz.sig && \
    tar xvzf xz-5.2.3.tar.gz && \
    cd xz-5.2.3 && \
    ./configure --disable-shared --prefix=/usr/local/ && \
    make && \
    make install && \
    cd ../ && \
    rm -r xz-5.2.3* && \
    apt_purge(``autoconf automake libtool'') && \
    cd /home/musicbrainz')

m4_divert`'m4_dnl
