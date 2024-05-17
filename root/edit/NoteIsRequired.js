/*
 * @flow strict
 * Copyright (C) 2020 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import Layout from '../layout/index.js';
import EditLink from '../static/scripts/common/components/EditLink.js';

component NoteIsRequired(edit: GenericEditWithIdT) {
  const editDisplay = 'edit #' + edit.id;
  const editLink = <EditLink content={editDisplay} edit={edit} />;
  return (
    <Layout fullWidth title={l('Error approving edit')}>
      <h1>{l('Error approving edit')}</h1>
      <p>
        {exp.l(
          `{edit} has received one or more "no" votes,
           you must leave an edit note before you can approve it.`,
          {edit: editLink},
        )}
      </p>
    </Layout>
  );
}

export default NoteIsRequired;
