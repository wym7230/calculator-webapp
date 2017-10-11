import React, { Component } from 'react';
import { Button } from '../../components/';
import './input_panel.css';

class InputPanel extends Component {
  render() {
    const { onButtonPressed } = this.props;
    return (
      <div className="buttonPanel f7 d-flex flex-row">
        <div className="f1 d-flex flex-column">
          <Button value="π" grey onButtonPressed={onButtonPressed}>
            π
          </Button>
          <Button value="e" grey onButtonPressed={onButtonPressed}>
            e
          </Button>
          <Button value="sin" grey onButtonPressed={onButtonPressed}>
            sin
          </Button>
          <Button value="√" grey onButtonPressed={onButtonPressed}>
            √
          </Button>
          <Button value="²" grey onButtonPressed={onButtonPressed}>
            ²
          </Button>
        </div>
        <div className="f3 d-flex flex-column">
          <div className="f1 d-flex flex-row">
            <Button value="C" grey onButtonPressed={onButtonPressed}>
              C
            </Button>
            <Button value="±" grey onButtonPressed={onButtonPressed}>
              ±
            </Button>
            <Button value="%" grey onButtonPressed={onButtonPressed}>
              %
            </Button>
          </div>
          <div className="f1 d-flex flex-row">
            <Button value="7" onButtonPressed={onButtonPressed}>
              7
            </Button>
            <Button value="8" onButtonPressed={onButtonPressed}>
              8
            </Button>
            <Button value="9" onButtonPressed={onButtonPressed}>
              9
            </Button>
          </div>
          <div className="f1 d-flex flex-row">
            <Button value="4" onButtonPressed={onButtonPressed}>
              4
            </Button>
            <Button value="5" onButtonPressed={onButtonPressed}>
              5
            </Button>
            <Button value="6" onButtonPressed={onButtonPressed}>
              6
            </Button>
          </div>
          <div className="f1 d-flex flex-row">
            <Button value="1" onButtonPressed={onButtonPressed}>
              1
            </Button>
            <Button value="2" onButtonPressed={onButtonPressed}>
              2
            </Button>
            <Button value="3" onButtonPressed={onButtonPressed}>
              3
            </Button>
          </div>
          <div className="f1 d-flex flex-row">
            <Button size={2} value="0" onButtonPressed={onButtonPressed}>
              0
            </Button>
            <Button value="." onButtonPressed={onButtonPressed}>
              .
            </Button>
          </div>
        </div>
        <div className="f1 d-flex flex-column">
          <Button value="/" orange onButtonPressed={onButtonPressed}>
            /
          </Button>
          <Button value="*" orange onButtonPressed={onButtonPressed}>
            x
          </Button>
          <Button value="-" orange onButtonPressed={onButtonPressed}>
            -
          </Button>
          <Button value="+" orange onButtonPressed={onButtonPressed}>
            +
          </Button>
          <Button value="=" orange onButtonPressed={onButtonPressed}>
            =
          </Button>
        </div>
      </div>
    );
  }
}

export default InputPanel;
