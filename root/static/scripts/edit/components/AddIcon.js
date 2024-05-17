/*
 * @flow strict
 * Copyright (C) 2019 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import addIconUrl from '../../../images/icons/add.png';

component AddIcon() {
  return (
    <img
      className="bottom"
      src={addIconUrl}
    />
  );
}

export default AddIcon;
