/*
 * @flow strict
 * Copyright (C) 2019 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import fs from 'fs';
import path from 'path';

import * as DBDefs from '../static/scripts/common/DBDefs.mjs';

const COVERAGE_DIR = path.resolve(DBDefs.MB_SERVER_ROOT, '.nyc_output');

if (!fs.existsSync(COVERAGE_DIR)) {
  fs.mkdirSync(COVERAGE_DIR);
}

export default function writeCoverage(
  fileName: string,
  coverageString: string,
) {
  const coverageFileName = `${fileName}.json`;

  fs.open(
    path.resolve(COVERAGE_DIR, coverageFileName),
    'w',
    0o755,
    function (err, fd) {
      if (err) {
        throw err;
      }
      fs.write(fd, coverageString, function (err) {
        if (err) {
          throw err;
        }
        fs.close(fd, function (err) {
          if (err) {
            throw err;
          }
        });
      });
    },
  );
}
