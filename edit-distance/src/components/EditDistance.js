import '../App.css';
import React from 'react';
import Divider from './Divider';

// TODO:
// determine/display alignment and alignment score


// returns matrix of calculation for edit distance
function calcEditDistance(word1, word2){
  const len_1 = word1.length
  const len_2 = word2.length

  // create empty 2D array to store calculations
  let matrix = new Array(len_1+2).fill(0).map((row,index) =>      
    new Array(len_2+2).fill(0))

  matrix[0][0] = ''
  matrix[1][0] = ''
  matrix[0][1] = ''

  // set values in first column to indices of word1
  for(let i = 2; i < (len_1+2); i++){
    matrix[i][0] = word1[i - 2]
    matrix[i][1] = i - 1
  }

  // set values in first row to indices of word2
  for(let i = 2; i < (len_2+2); i++){
    matrix[0][i] = word2[i - 2]
    matrix[1][i] = i - 1
  }

  // calculate edit distance
  for(let i = 2; i < (len_1 + 2); i++){
    for (let j = 2; j < (len_2 + 2); j++){
      let vals = [matrix[i-1][j], matrix[i][j-1], matrix[i-1][j-1]]
      let min_val = Math.min(...vals)
      if (matrix[i][0] == matrix[0][j]){
        matrix[i][j] = matrix[i-1][j-1]
      }
      else {
        matrix[i][j] = min_val + 1
      }
    }
  }
  console.log(matrix)
  return matrix
}

class EditDistance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstWord: '',
      secondWord: '',
      matrix: [[]]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log('Words were submitted: ' + this.state.firstWord + ', ' + this.state.secondWord);
    event.preventDefault();
    this.setState({
      matrix: calcEditDistance(this.state.firstWord, this.state.secondWord)
    })
  }

  render() {
    return (
      <div className="WordInput">
        <div>
          <h2>Please input two words for the edit distance:</h2>
          <form onSubmit={ this.handleSubmit }>
            <label>
              The first word:
              <input 
                type="text" 
                name="firstWord" 
                value={ this.state.firstWord }
                onChange={ this.handleChange }
                style={{ marginLeft: 5 }}
              />
            </label>
            <label style={{ marginRight: 5 }}>
              The second word: 
              <input 
                type="text" 
                name="secondWord" 
                value={ this.state.secondWord }
                onChange={ this.handleChange }
                style={{ marginLeft: 5 }}
                />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <Divider></Divider>
        <div className="matrix">
          <table>
            <thead>
            </thead>
            <tbody>
              {this.state.matrix.map((row, i) => (
                <tr key={i}>
                  {row.map((col, j) => (
                    <td key={j}>{col}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default EditDistance