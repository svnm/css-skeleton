import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Demo.css'
import { base, buttons, grid } from 'css-skeleton'
Object.assign(styles, base, buttons, grid)

function Demo( props) {

    const { route } = props

    return (
    	<div styleName='container'>
    		<div styleName='row'>
	    		<div styleName='six column'>
	    			<h2>Heading</h2>
	    		</div>
	    		<div styleName='six columns'>
	    			<input type='button' value='button input' />
	    		</div>
	    	</div>
    	</div>
    )
}

export default CSSModules(Demo, styles, {allowMultiple: true} )
