import PropTypes from 'prop-types';
import { Button } from './GoBackButton.styled';

function GoBackButton({ children, ...props }) {
  return <Button {...props}>&#8592; {children}</Button>;
}

GoBackButton.propTypes = {
  children: PropTypes.any,
};

export default GoBackButton;
