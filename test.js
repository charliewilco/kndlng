import { StyleSheet, css } from 'aphrodite/no-important'
import { Typescale, Obsidian, Spacing, Families } from '.'

// function linearGradient (x, y) {
//   return `linear-gradient(to right, ${x}, ${y})`
// }

function btnFn (color, hover) {
  return {
    appearance: 'none',
    width: '7.5rem',
    height: '7.5rem',
    textAlign: 'center',
    borderRadius: '50%',
    fontSize: Typescale().f5,
    lineHeight: 1,
    border: 0,
    transition: 'all 250ms linear',
    color: Obsidian.offwhite,
    backgroundColor: color,
    ':hover': {
      backgroundColor: hover
    }
  }
}

const styles = StyleSheet.create({
  block: {
    fontSize: Typescale().f3,
    fontFamily: Families.avenir,
    color: Obsidian.yellow,
    padding: Spacing.three(),
    backgroundColor: Obsidian.blue,
    marginBottom: Spacing.four()
  },
  card: {
    maxWidth: '18.75rem',
    margin: '2rem auto',
    color: Obsidian.offwhite,
    backgroundColor: Obsidian.red,
    textAlign: 'center',
    padding: Spacing.four(),
    fontSize: Typescale().f2,
    fontFamily: Families.charter
  },
  button: btnFn(Obsidian.yellow, Obsidian.blue)
  // button: {
  //   appearance: 'none',
  //   width: '7.5rem',
  //   height: '7.5rem',
  //   textAlign: 'center',
  //   borderRadius: '50%',
  //   fontSize: Typescale().f5,
  //   lineHeight: 1,
  //   border: 0,
  //   transition: 'all 250ms linear',
  //   color: Obsidian.offwhite,
  //   backgroundColor: Obsidian.yellow,
  //   ':hover': {
  //     backgroundColor: Obsidian.green,
  //     color: Obsidian.text
  //   }
  // }
})

class App extends HTMLElement {
  attachedCallback () {
    this.innerHTML = `
      <div class="${css(styles.card)}">
        This is a card
      </div>
      <div class="${css(styles.block)}">
        This is blue thing
      </div>
    `
  }
}

class Button extends HTMLElement {
  attachedCallback () {
    this.innerHTML = `
    <div style='text-align: center'>
      <button type="button" name="button" class='${css(styles.button)}'>Add</button>
      <button type="button" name="button" class='${css(styles.button)}'>Button</button>
    </div>
    `
  }
}

console.log(Obsidian)

document.registerElement('my-app', App)
document.registerElement('super-button', Button)

document.body.style.margin = 0
