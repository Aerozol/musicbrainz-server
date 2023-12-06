package MusicBrainz::Server::Data::LabelType;

use Moose;
use namespace::autoclean;
use MusicBrainz::Server::Entity::LabelType;
use MusicBrainz::Server::Data::Utils qw( load_subobjects );

extends 'MusicBrainz::Server::Data::Entity';
with 'MusicBrainz::Server::Data::Role::EntityCache',
     'MusicBrainz::Server::Data::Role::OptionsTree',
     'MusicBrainz::Server::Data::Role::Attribute';

sub _type { 'label_type' }

sub _table
{
    return 'label_type';
}

sub _entity_class
{
    return 'MusicBrainz::Server::Entity::LabelType';
}

sub load
{
    my ($self, @objs) = @_;
    load_subobjects($self, 'type', @objs);
}

sub in_use {
    my ($self, $id) = @_;
    return $self->sql->select_single_value(
        'SELECT 1 FROM label WHERE type = ? LIMIT 1',
        $id);
}

__PACKAGE__->meta->make_immutable;
no Moose;
1;

=head1 COPYRIGHT AND LICENSE

Copyright (C) 2009 Lukas Lalinsky

This file is part of MusicBrainz, the open internet music database,
and is licensed under the GPL version 2, or (at your option) any
later version: http://www.gnu.org/licenses/gpl-2.0.txt

=cut
