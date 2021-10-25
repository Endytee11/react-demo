import react, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Hello = props => {
    const Hello_array = ([
        {
            id: 1,
            name: "name hello1",
        },
        {
            id: 2,
            name: "name hello2",
        },
        {
            id: 3,
            name: "name hello3",
        },
        {
            id: 4,
            name: "name hello4",
        }
    ])
    //console.log(Hello_array)

    return(
        <Fragment>
            {Hello_array.map(Hello => {
                return(
                    <p id={Hello.id} name={Hello.name}>hello {Hello.id} va {Hello.name}</p>
                )
            })}
        </Fragment>
    )
}

export default Hello