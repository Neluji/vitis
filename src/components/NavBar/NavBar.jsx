import { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './NavBar.styles'
import { AiFillHome } from 'react-icons/ai'

function NavBtn({ id, children }) {
  return (
    <button
      id={id + '-btn'}
      className={styles.button}
      data-testid={'test-btn-' + id}
    >
      <span className='relative'>
        <span className={styles.hoverEffectRotation}>
          <span className={styles.hoverEffectScale}></span>
        </span>
        <span className='relative'>{children}</span>
      </span>
    </button>
  )
}
NavBtn.propTypes = {
  id: PropTypes.any,
  children: PropTypes.any,
}

class NavBar extends Component {
  render() {
    const groups = this.props.groups.map((val) => {
      return (
        <NavBtn key={val} id={'group-' + val}>
          {val}
        </NavBtn>
      )
    })

    return (
      <div className={styles.navbar}>
        <div className='topBtns w-min'>
          <NavBtn id='home'>
            <AiFillHome />
          </NavBtn>
          {groups}
        </div>
        <div className='bottomBtns w-min '>
          <NavBtn id='settings'>S</NavBtn>
          <NavBtn id='profile'>P</NavBtn>
        </div>
      </div>
    )
  }
}
NavBar.propTypes = {
  groups: PropTypes.array,
}

export default NavBar
