/*
 * @flow strict
 * Copyright (C) 2018 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

type Props = {
  +field: FieldT<number | string>,
};

const HiddenField = ({
  field,
}: Props): React$Element<'input'> => (
  <input
    name={field.html_name}
    type="hidden"
    value={field.value}
  />
);

export default HiddenField;
