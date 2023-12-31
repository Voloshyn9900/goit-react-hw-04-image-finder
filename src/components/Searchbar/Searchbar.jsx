import React, { Component, useState } from 'react';
import { Header, Form, Button, Span, Input } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setQuery(value);
    // this.props.onQuery(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      return;
    }
    onSubmit(query); // Возвращяет форму наверх
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <Span>Поиск</Span>
        </Button>

        <Input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Искать изображения и фотографии"
          onChange={handleChange}
        />
      </Form>
    </Header>
  );
};


export class Searchbar1 extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ query: value });
    // this.props.onQuery(value); 

  };

  handleSubmit = event => {
    event.preventDefault();
     if (this.state.query.trim() === '') {
       return;
     }
    this.props.onSubmit(this.state.query); // Возвращяет форму наверх
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <Span>Поиск</Span>
          </Button>

          <Input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Искать изображения и фотографии"
            onChange={this.handleChange}
          />
        </Form>
      </Header>
    );
  }
}
