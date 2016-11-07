import obsidian from 'json!obsidian.css/css.json'
import { StyleSheet } from 'aphrodite'

import spacing from './spacing'
import typescale from './typescale'

const styles = StyleSheet.create({
  block: {
    background: linearGradient(obsidian.red, obsidian.orange),
    position: 'relative',
    color: obsidian.offwhite,
    fontFamily: families.helvetica,
    fontSize: Typescale().f3,
    padding: spacing().three()
  },
  card: {
    backgroundColor: obsidian.yellow,
    color: obsidian.offwhite,
    textAlign: 'center',
    fontSize: typescale().f1,
    fontFamily: families.charter,
    padding: spacing().five()
  }
})

export default styles
