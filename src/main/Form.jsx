import React, { useState } from 'react'
import './Form.css'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

export default function Form() {
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [adress, setAdress] = useState('')
    const [number, setNumber] = useState('')
    const [area, setArea] = useState('')
    const [city, setCity] = useState('')

    const save = () => {
        /* Verifica se o CPF digitado é válido */
        if (!(validateCPF(cpf))) {
            alert('Digite um CPF válido!')
            return
        }
        /* Verifica  se o email digitado é válido */
        if (!(validateEmail(email))) {
            alert('Digite um e-mail válido!')
            return
        }

        console.log(`Valores digitados:\nNome: ${name}\nCPF: ${cpf}\nE-mail: ${email}\nEndereço: ${adress}\nNº: ${number}\nBairro: ${area}\nCidade: ${city}`) /* Imprime valores no console */
    }

    /* Função que verifica validade do email */
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    /* Função que verifica  a validade do CPF */
    function validateCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf === '') return false;
        let add = 0;
        for (let i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
        let rev = 11 - (add % 11);
        if (rev === 10 || rev === 11)
            rev = 0;
        if (rev !== parseInt(cpf.charAt(9)))
            return false;
        add = 0;
        for (let i = 0; i < 10; i++)
            add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev === 10 || rev === 11)
            rev = 0;
        if (rev !== parseInt(cpf.charAt(10)))
            return false;
        return true;
    }

    return (
        <div className='form'>
            <div className='row'>
                <TextField
                    className="input"
                    id="name"
                    label="Nome"
                    variant="outlined"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value)
                    }}
                    fullWidth
                    margin="dense"
                />
            </div>
            <div className='row'>
                <TextField
                    className="input"
                    id="cpf"
                    label="CPF"
                    variant="outlined"
                    type="number"
                    value={cpf}
                    onChange={(event) => {
                        setCpf(event.target.value)
                    }}
                    margin="dense"
                />
                <TextField
                    className="input"
                    id="email"
                    label="E-mail"
                    variant="outlined"
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value)
                    }}
                    margin="dense"
                />
            </div>
            <div className='row'>
                <TextField
                    className="input"
                    id="adress"
                    label="Endereço"
                    variant="outlined"
                    value={adress}
                    onChange={(event) => {
                        setAdress(event.target.value)
                    }}
                    fullWidth
                    margin="dense"
                />
                <TextField
                    className="input"
                    id="number"
                    label="Nº"
                    variant="outlined"
                    type="number"
                    value={number}
                    onChange={(event) => {
                        setNumber(event.target.value)
                    }}
                    margin="dense"
                />
            </div>
            <div className='row'>
                <TextField
                    className="input"
                    id="area"
                    label="Bairro"
                    variant="outlined"
                    value={area}
                    onChange={(event) => {
                        setArea(event.target.value)
                    }}
                    margin="dense"
                />
                <TextField
                    className="input"
                    id="city"
                    label="Cidade"
                    variant="outlined"
                    value={city}
                    onChange={(event) => {
                        setCity(event.target.value)
                    }}
                    margin="dense"
                />
            </div>
            <div className='row-btn'>
                <Button
                    variant="contained"
                    size="large"
                    startIcon={<SaveIcon />}
                    onClick={save}
                >
                    Salvar
                </Button>
            </div>
        </div>
    )
}