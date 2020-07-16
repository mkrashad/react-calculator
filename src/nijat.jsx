const Display = props => {
  return (
    <h1 id="display">
      {props.display}
    </h1>
  )
}

const KeyPad = props => {
  const IDs = [
    'clear',
    'seven', 'eight', 'nine', 'divide',
    'four', 'five', 'six', 'multiply',
    'one', 'two', 'three', 'subtract',
    'decimal', 'zero', 'equals', 'add'
  ]
  return (
    <div id="keypad">
      {props.actions.map((key, i) => (
        <button id={IDs[i]}
          onClick={() => props.updateExpr(key)}
          key={i} style={{ gridArea: IDs[i] }}>{key}
        </button>
      ))}
    </div>
  )
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.actions = [
      'C',
      '7', '8', '9', '÷',
      '4', '5', '6', '×',
      '1', '2', '3', '-',
      '.', '0', '=', '+'
    ]
    this.state = {
      expression: '',
      decimalAllowed: true,
      display: '0'
    }
  }

  handleExpression = key => {
    if (!isNaN(key)) {
      this._updateExpressionStack(key)
      return
    }

    if (key !== '.')
      this.setState({ decimalAllowed: true })

    switch (key) {
      case 'C':
        this._clearExpression()
        break
      case '=':
        this._evaluateExpression()
        break
      case '÷':
        this._updateExpressionStack('/')
        break
      case '×':
        this._updateExpressionStack('*')
        break
      case '.':
        this._updateExpressionStack(key)
        this.setState({ decimalAllowed: false })
        break
      default:
        this._updateExpressionStack(key)
        break
    }
  }

  _updateExpressionStack = key => {
    if (key === '.' && !this.state.decimalAllowed)
      return

    let expr = this.state.expression
    if (!this._isValidExpression(key))
      expr = expr.substring(0, expr.length - 1)

    expr += key

    this.setState({
      expression: expr,
      display: expr
        .replace('/', '÷')
        .replace('*', '×')
        .replace(/0+/, '0')
    })
  }

  _isValidExpression = unit => {
    const expr = this.state.expression
    return !(isNaN(expr[expr.length - 1]) && isNaN(unit))
  }

  _evaluateExpression = () => {
    const result = eval(this.state.expression).toString()
    this.setState({
      display: result,
      expression: result
    })
  }

  _clearExpression = () => {
    this.setState({ expression: '', display: '0' })
  }

  componentWillMount() {
    document.addEventListener(
      "keydown",
      event => {
        if (!isNaN(event.key) || event.key === '+' || event.key === '-' || event.key === '.')
          this.handleExpression(event.key);
        else if (event.key === '/') this.handleExpression('÷');
        else if (event.key === '*') this.handleExpression('×');
        else if (event.key === 'Enter') this.handleExpression('=');
        else if (event.key === 'Backspace') this.handleExpression('C');
        else return
      });
  }

  componentWillUnmount() {
    document.removeEventListener('keypress');
  }

  render() {
    return (
      <div id="calculator">
        <Display display={this.state.display} />
        <KeyPad actions={this.actions} updateExpr={this.handleExpression} />
      </div>
    )
  }
}

ReactDOM.render(<Calculator />, document.querySelector('#root'))