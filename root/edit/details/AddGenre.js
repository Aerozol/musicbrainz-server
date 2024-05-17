/*
 * @flow strict
 * Copyright (C) 2022 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import DescriptiveLink
  from '../../static/scripts/common/components/DescriptiveLink.js';

component AddGenre(edit: AddGenreEditT) {
  const display = edit.display_data;

  return (
    <>
      <table className="details">
        <tr>
          <th>{addColonText(l('Genre'))}</th>
          <td>
            <DescriptiveLink
              entity={display.genre}
            />
          </td>
        </tr>
      </table>

      <table className="details add-genre">
        <tr>
          <th>{addColonText(l('Name'))}</th>
          <td>{display.name}</td>
        </tr>

        {nonEmpty(display.comment) ? (
          <tr>
            <th>{addColonText(l('Disambiguation'))}</th>
            <td>{display.comment}</td>
          </tr>
        ) : null}
      </table>
    </>
  );
}

export default AddGenre;
