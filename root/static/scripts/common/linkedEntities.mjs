/*
 * @flow strict
 * Copyright (C) 2018 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

export type LinkedEntitiesT = {
  area: {
    [areaId: number]: AreaT,
  },
  area_alias_type: {
    [typeId: number]: AreaAliasTypeT,
  },
  area_type: {
    [areaTypeId: number]: AreaTypeT,
  },
  artist: {
    [artistId: number]: ArtistT,
  },
  artist_alias_type: {
    [typeId: number]: ArtistAliasTypeT,
  },
  artist_type: {
    [artistId: number]: ArtistTypeT,
  },
  edit: {
    [editId: number]: EditWithIdT,
  },
  editor: {
    [editorId: number]: EditorT,
  },
  event: {
    [eventId: number]: EventT,
  },
  event_alias_type: {
    [typeId: number]: EventAliasTypeT,
  },
  event_type: {
    [eventTypeId: number]: EventTypeT,
  },
  genre: {
    [genreId: number]: GenreT,
  },
  genre_alias_type: {
    [typeId: number]: GenreAliasTypeT,
  },
  instrument: {
    [instrumentId: number]: InstrumentT,
  },
  instrument_alias_type: {
    [typeId: number]: InstrumentAliasTypeT,
  },
  instrument_type: {
    [instrumentTypeId: number]: InstrumentTypeT,
  },
  label: {
    [labelId: number]: LabelT,
  },
  label_alias_type: {
    [typeId: number]: LabelAliasTypeT,
  },
  label_type: {
    [labelTypeId: number]: LabelTypeT,
  },
  language: {
    [languageId: number]: LanguageT,
  },
  link_attribute_type: {
    [linkAttributeTypeIdOrGid: StrOrNum]: LinkAttrTypeT,
  },
  link_type: {
    [linkTypeIdOrGid: StrOrNum]: LinkTypeT,
  },
  link_type_tree: {
    [entityTypes: string]: Array<LinkTypeT>,
  },
  place: {
    [placeId: number]: PlaceT,
  },
  place_alias_type: {
    [typeId: number]: PlaceAliasTypeT,
  },
  place_type: {
    [placeTypeId: number]: PlaceTypeT,
  },
  recording: {
    [recordingId: number]: RecordingT,
  },
  recording_alias_type: {
    [typeId: number]: RecordingAliasTypeT,
  },
  release: {
    [releaseId: number]: ReleaseT,
  },
  release_alias_type: {
    [typeId: number]: ReleaseAliasTypeT,
  },
  release_group: {
    [releaseGroupId: number]: ReleaseGroupT,
  },
  release_group_alias_type: {
    [typeId: number]: ReleaseGroupAliasTypeT,
  },
  release_group_primary_type: {
    [releaseGroupPrimaryTypeId: number]: ReleaseGroupTypeT,
  },
  release_group_secondary_type: {
    [releaseGroupSecondaryTypeId: number]: ReleaseGroupSecondaryTypeT,
  },
  release_packaging: {
    [releasePackagingId: number]: ReleasePackagingT,
  },
  release_status: {
    [releaseStatusId: number]: ReleaseStatusT,
  },
  script: {
    [scriptId: number]: ScriptT,
  },
  series: {
    [seriesId: number]: SeriesT,
  },
  series_alias_type: {
    [typeId: number]: SeriesAliasTypeT,
  },
  series_ordering_type: {
    [seriesOrderingTypeId: number]: SeriesOrderingTypeT,
  },
  series_type: {
    [seriesTypeId: string]: SeriesTypeT,
  },
  url: {
    [urlId: number]: UrlT,
  },
  work: {
    [workId: number]: WorkT,
  },
  work_alias_type: {
    [typeId: number]: WorkAliasTypeT,
  },
  work_attribute_type: {
    [workAttributeTypeId: number]: WorkAttributeTypeT,
  },
  work_type: {
    [workTypeId: string]: WorkTypeT,
  },
  ...
};

// $FlowIgnore[method-unbinding]
const hasOwnProperty = Object.prototype.hasOwnProperty;

const EMPTY_OBJECT = Object.freeze({});

const linkedEntities: LinkedEntitiesT = Object.create(Object.seal({
  area:                           EMPTY_OBJECT,
  area_alias_type:                EMPTY_OBJECT,
  area_type:                      EMPTY_OBJECT,
  artist:                         EMPTY_OBJECT,
  artist_alias_type:              EMPTY_OBJECT,
  artist_type:                    EMPTY_OBJECT,
  edit:                           EMPTY_OBJECT,
  editor:                         EMPTY_OBJECT,
  event:                          EMPTY_OBJECT,
  event_alias_type:               EMPTY_OBJECT,
  event_type:                     EMPTY_OBJECT,
  genre:                          EMPTY_OBJECT,
  genre_alias_type:               EMPTY_OBJECT,
  instrument:                     EMPTY_OBJECT,
  instrument_alias_type:          EMPTY_OBJECT,
  instrument_type:                EMPTY_OBJECT,
  label:                          EMPTY_OBJECT,
  label_alias_type:               EMPTY_OBJECT,
  label_type:                     EMPTY_OBJECT,
  language:                       EMPTY_OBJECT,
  link_attribute_type:            EMPTY_OBJECT,
  link_type:                      EMPTY_OBJECT,
  link_type_tree:                 EMPTY_OBJECT,
  place:                          EMPTY_OBJECT,
  place_alias_type:               EMPTY_OBJECT,
  place_type:                     EMPTY_OBJECT,
  recording:                      EMPTY_OBJECT,
  recording_alias_type:           EMPTY_OBJECT,
  release:                        EMPTY_OBJECT,
  release_alias_type:             EMPTY_OBJECT,
  release_group:                  EMPTY_OBJECT,
  release_group_alias_type:       EMPTY_OBJECT,
  release_group_primary_type:     EMPTY_OBJECT,
  release_group_secondary_type:   EMPTY_OBJECT,
  release_packaging:              EMPTY_OBJECT,
  release_status:                 EMPTY_OBJECT,
  script:                         EMPTY_OBJECT,
  series:                         EMPTY_OBJECT,
  series_alias_type:              EMPTY_OBJECT,
  series_ordering_type:           EMPTY_OBJECT,
  series_type:                    EMPTY_OBJECT,
  url:                            EMPTY_OBJECT,
  work:                           EMPTY_OBJECT,
  work_alias_type:                EMPTY_OBJECT,
  work_attribute_type:            EMPTY_OBJECT,
  work_type:                      EMPTY_OBJECT,
}));

export default linkedEntities;

export function mergeLinkedEntities(
  update: ?$ReadOnly<$Partial<LinkedEntitiesT>>,
): void {
  if (update) {
    for (const [type, entities] of Object.entries(update)) {
      if (hasOwnProperty.call(linkedEntities, type)) {
        Object.assign(linkedEntities[type], entities);
      } else {
        linkedEntities[type] = entities;
      }
    }
  }
}

export function setLinkedEntities(
  update: ?LinkedEntitiesT,
): void {
  for (const key of Object.keys(linkedEntities)) {
    // $FlowIgnore[incompatible-type]
    delete linkedEntities[key];
    /*
     * The above line is deleting the own property only, not the one on the
     * prototype. However, Flow thinks it'll make the object key undefined.
     */
  }
  if (update) {
    Object.assign(linkedEntities, update);
  }
}
