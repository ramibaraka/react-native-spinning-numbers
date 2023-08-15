/* eslint-disable no-undef */
import { render } from '@testing-library/react-native';
import SpinningNumbers from '../src';
import { CHARS_TO_MEASURE } from '../src/core/constants';

const sleep = async () => new Promise( ( resolve ) => setTimeout( resolve, 250 ) );

describe( 'Spinning numbers test', () => {

  it( 'Should be correct text', () => {

    const text = '14,578';
    const { getByTestId, rerender } = render( <SpinningNumbers>{text}</SpinningNumbers> );
    expect( getByTestId( 'spinningContainer' ) ).toHaveTextContent( text );

  } );

  it( 'Should be correct text on rerender', () => {

    const text = '14,578';
    const { getByTestId, rerender } = render( <SpinningNumbers>{text}</SpinningNumbers> );

    const text2 = '17,239';
    rerender( <SpinningNumbers>{text2}</SpinningNumbers> );
    expect( getByTestId( 'spinningContainer' ) ).toHaveTextContent( text2 );

  } );

  it( 'Should be correct text when added decimals', () => {

    const text = '14,578';
    const { getByTestId, rerender } = render( <SpinningNumbers>{text}</SpinningNumbers> );

    const text2 = '47,956.78';
    rerender( <SpinningNumbers>{text2}</SpinningNumbers> );
    expect( getByTestId( 'spinningContainer' ) ).toHaveTextContent( text2 );

  } );

  it( 'Should be correct text when text is empty', () => {

    const text = '14,578';
    const { getByTestId, rerender } = render( <SpinningNumbers>{text}</SpinningNumbers> );

    const text2 = '';
    rerender( <SpinningNumbers>{text2}</SpinningNumbers> );
    expect( getByTestId( 'spinningContainer' ) ).toHaveTextContent( text2 );

  } );

  it( 'Should be correct text when there is no thousand', () => {

    const text = '14,578';
    const { getByTestId, rerender } = render( <SpinningNumbers>{text}</SpinningNumbers> );

    const text2 = '78,89';
    rerender( <SpinningNumbers>{text2}</SpinningNumbers> );
    expect( getByTestId( 'spinningContainer' ) ).toHaveTextContent( text2 );

  } );

  it( 'Should be correct text when there is thousand and rest is the same', () => {

    const text = '14,578';
    const { getByTestId, rerender } = render( <SpinningNumbers>{text}</SpinningNumbers> );

    const text2 = '1,078.89';
    rerender( <SpinningNumbers>{text2}</SpinningNumbers> );
    expect( getByTestId( 'spinningContainer' ) ).toHaveTextContent( text2 );

  } );

  it( 'Should be correct text when changed thousands', () => {

    const text = '14,578.45';
    const { getByTestId, rerender } = render( <SpinningNumbers>{text}</SpinningNumbers> );

    const text2 = '2,078.89';
    rerender( <SpinningNumbers>{text2}</SpinningNumbers> );
    expect( getByTestId( 'spinningContainer' ) ).toHaveTextContent( text2 );

  } );

  it( 'Should work when more decimal points', () => {

    const text = '14,578.457.4878';
    const { getByTestId, rerender } = render( <SpinningNumbers>{text}</SpinningNumbers> );

    const text2 = '2,078.89457989.4579';
    rerender( <SpinningNumbers>{text2}</SpinningNumbers> );
    expect( getByTestId( 'spinningContainer' ) ).toHaveTextContent( text2 );

  } );

  it( 'Should work when more decimal points & no thousands', () => {

    const text = '1,578.457.4878';
    const { getByTestId, rerender } = render( <SpinningNumbers>{text}</SpinningNumbers> );

    const text2 = '78.89457989.4579';
    rerender( <SpinningNumbers>{text2}</SpinningNumbers> );
    expect( getByTestId( 'spinningContainer' ) ).toHaveTextContent( text2 );

  } );

  it( 'Should work with negative number', () => {

    const text = '-71.45';
    const { getByTestId, rerender } = render( <SpinningNumbers>{text}</SpinningNumbers> );

    const text2 = '-78.89';
    rerender( <SpinningNumbers>{text2}</SpinningNumbers> );
    expect( getByTestId( 'spinningContainer' ) ).toHaveTextContent( text2 );

  } );

  it( 'Should work without decimals', () => {

    const text = '-71';
    const { getByTestId, rerender } = render( <SpinningNumbers>{text}</SpinningNumbers> );

    const text2 = '-78.89';
    rerender( <SpinningNumbers>{text2}</SpinningNumbers> );
    expect( getByTestId( 'spinningContainer' ) ).toHaveTextContent( text2 );

  } );

  it( 'Should work without weird char', () => {

    const text = '-71';
    const { getByTestId, rerender } = render( <SpinningNumbers>{text}</SpinningNumbers> );

    const text2 = '<';
    rerender( <SpinningNumbers>{text2}</SpinningNumbers> );
    expect( getByTestId( 'spinningContainer' ) ).toHaveTextContent( text2 );

  } );

} );

// describe( 'Animated number test', () => {

//   it( 'Should render', async () => {

//   } );

// } );