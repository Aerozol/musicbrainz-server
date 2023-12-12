/*
 * @flow strict
 * Copyright (C) 2020 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import Layout from '../layout/index.js';

const CannotVote = (): React$Element<typeof Layout> => (
  <Layout fullWidth title={l('Error voting on edits')}>
    <h1>{l('Error voting on edits')}</h1>
    <p>
      {l('You’re not currently allowed to vote, please read the banner.')}
    </p>
  </Layout>
);

export default CannotVote;
