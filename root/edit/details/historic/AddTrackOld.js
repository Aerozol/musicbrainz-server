/*
 * @flow strict
 * Copyright (C) 2020 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import HistoricReleaseList
  from '../../components/HistoricReleaseList.js';

component AddTrackOld(edit: AddTrackOldHistoricEditT) {
  return (
    <table className="details add-track">
      <HistoricReleaseList releases={edit.display_data.releases} />

      <tr>
        <th>{addColonText(l('Name'))}</th>
        <td>{edit.display_data.name}</td>
      </tr>

      {nonEmpty(edit.display_data.artist_name) ? (
        <tr>
          <th>{l('Artist name:')}</th>
          <td>{edit.display_data.artist_name}</td>
        </tr>
      ) : null}

      <tr>
        <th>{addColonText(l('Track number'))}</th>
        <td>{edit.display_data.position}</td>
      </tr>
    </table>
  );
}

export default AddTrackOld;
