import React, { useEffect, useState } from 'react'

import { Container, Dropdown, DropdownButton, InputGroup, Row } from 'react-bootstrap'

import { connect } from 'react-redux'

import { setName, changePage } from '../actions'

const Calculator = ({ dispatch }) => {
    const [currentCrypto, setCrypto] = useState('Select Cryptocurrency')

    const cryptoCurrencies = ['ALGO', 'DOGE', 'ETH', 'XRP']

    function dropdownHandler(name) {
        dispatch(setName(name))
        dispatch(changePage(name))
    }

    return (
            <Row>
                <InputGroup className="d-flex justify-content-center">
                    <DropdownButton id="dropdown-basic-button" title={currentCrypto} display='block'>
                        {cryptoCurrencies.map((crypto, i) => <Dropdown.Item key={i} onClick={evt => dropdownHandler(evt.target.innerHTML)}>{crypto}</Dropdown.Item>)}
                    </DropdownButton>
                </InputGroup>
            </Row>
    )
}

export default connect()(Calculator)