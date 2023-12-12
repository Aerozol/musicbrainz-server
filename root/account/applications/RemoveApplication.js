/*
 * @flow strict
 * Copyright (C) 2018 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import ConfirmLayout from '../../components/ConfirmLayout.js';

type Props = {
  +form: SecureConfirmFormT,
};

const RemoveApplication = ({
  form,
}: Props): React$Element<typeof ConfirmLayout> => (
  <ConfirmLayout
    form={form}
    question={l('Are you sure you want to remove this application?')}
    title={lp('Remove application', 'header')}
  />
);

export default RemoveApplication;
