// Uses webpack to load in the JSON
import obsidian from 'json!obsidian.css/css.json'
import families from 'json!ff.css/families.json'

import cnf from './lib/config'
import spacing from './lib/spacing'
import typescale from './lib/typescale'

function KNDLG (config = cnf) {
  return {
    Obsidian: obsidian,
    Families: families,
    Spacing: spacing,
    Typescale: typescale(config.spacing.baseSp, config.spacing.unit)
  }
}

export {
  typescale as Typescale,
  families as Families,
  obsidian as Obsidian,
  spacing as Spacing
}

export default KNDLG
