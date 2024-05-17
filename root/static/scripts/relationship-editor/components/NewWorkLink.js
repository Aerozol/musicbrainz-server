/*
 * @flow strict
 * Copyright (C) 2022 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import {DeletedLink} from '../../common/components/EntityLink.js';

component NewWorkLink(work: WorkT) {
  return (
    <a href={'#new-work-' + String(work.id)}>
      <DeletedLink
        allowNew
        className="rel-add wrap-anywhere"
        name={work.name}
      />
    </a>
  );
}

export default NewWorkLink;
