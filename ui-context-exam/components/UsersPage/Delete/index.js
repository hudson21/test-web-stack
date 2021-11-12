import classes from './styled.module.css';

import Button from '../../UI/Button';

const DeleteUserForm = ({ onDelete, onCancel }) => {
  return (
    <div className="flex-column">
      <h2 className={classes.question}>
        Are you sure you want to delete this user?
      </h2>
      <div className={classes['button-actions-wrapper']}>
        <Button isPrimary value="Delete" onClick={onDelete} />
        <Button value="Cancel" onClick={onCancel} />
      </div>
    </div>
  );
};

export default DeleteUserForm;
