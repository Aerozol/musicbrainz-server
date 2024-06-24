/*
 * @flow strict
 * Copyright (C) 2018 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import localizeLanguageName
  from '../static/scripts/common/i18n/localizeLanguageName.js';

import LinkSearchableProperty from './LinkSearchableProperty.js';

component LinkSearchableLanguage(entityType: string, language: LanguageT) {
  return (
    <LinkSearchableProperty
      entityType={entityType}
      searchField="lang"
      searchValue={language.iso_code_3 || ''}
      text={localizeLanguageName(language, entityType === 'work')}
    />
  );
}

export default LinkSearchableLanguage;
