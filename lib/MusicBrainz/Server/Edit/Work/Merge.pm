package MusicBrainz::Server::Edit::Work::Merge;
use Moose;

use MusicBrainz::Server::Constants qw( $EDIT_WORK_MERGE );
use MusicBrainz::Server::Translation qw( l ln );

extends 'MusicBrainz::Server::Edit::Generic::Merge';
with 'MusicBrainz::Server::Edit::Work::RelatedEntities';
with 'MusicBrainz::Server::Edit::Work';

sub edit_type { $EDIT_WORK_MERGE }
sub edit_name { l("Merge works") }
sub work_ids { @{ shift->_entity_ids } }

sub _merge_model { 'Work' }

sub foreign_keys
{
    my $self = shift;
    return {
        Work => {
            $self->data->{new_entity}{id} => [ 'ArtistCredit', 'WorkType' ],
            map {
                $_->{id} => [ 'ArtistCredit', 'WorkType' ]
            } @{ $self->data->{old_entities} }
        }
    }
}

before build_display_data => sub {
    my ($self, $loaded) = @_;

    my @works = grep defined, map { $loaded->{Work}{$_} } $self->work_ids;
    $self->c->model('Work')->load_writers(@works);
    $self->c->model('Work')->load_recording_artists(@works);
};

__PACKAGE__->meta->make_immutable;
no Moose;

1;
