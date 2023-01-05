import React from "react";

const estadoInicial = {
    nome: '',
    sku: '',
    descricao: '',
    preco: 0,
    fornecedor: ''

}

export default class CadastroProduto extends React.Component {

    state = estadoInicial


    onChange = (event) => {
        const valor = event.target.value
        const nomeCampo = event.target.name

        this.setState({
            [nomeCampo]: valor
        })

    }

    onSubmit = (event) => {
        console.log(this.state)
        this.setState(estadoInicial)
    }

    limparCampos = () => {
        this.setState(estadoInicial)
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Cadastro de produtos
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome: *</label>
                                <input type="text" name="nome" className="form-control" onChange={this.onChange} value={this.state.nome} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>SKU: *</label>
                                <input type="text" name="sku" className="form-control" onChange={this.onChange} value={this.state.sku} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Descrição</label>
                                <input className="form-control" name="descricao" onChange={this.onChange} value={this.state.descricao} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Preço: *</label>
                                <input type="text" className="form-control" onChange={this.onChange} name="preco" value={this.state.preco} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Fornecedor: *</label>
                                <input type="text" className="form-control" onChange={this.onChange} name="fornecedor" value={this.state.fornecedor} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <button onClick={this.onSubmit} className="btn btn-success">Salvar</button>
                        </div>
                        <div className="col-md-1">
                            <button className="btn btn-primary" onClick={this.limparCampos}>Limpar</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}