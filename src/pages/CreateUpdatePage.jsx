import React from 'react';
import { useLocation } from 'react-router-dom';
import CreateUpdate from '../features/ActionsNew/CreateUpdate';
const CreateUpdatePage = (props) => {
  const location = useLocation();
  const arrayLocation = location.pathname.split('/');

  const action = arrayLocation[3];
  const slug = arrayLocation[arrayLocation.length - 1];
  const renderActionsHeading = () => {
    if (action === 'update') {
      return <h1 className="actions__heading">Cập nhật bài viết</h1>;
    } else if (action === 'create') {
      return <h1 className="actions__heading">Tạo bài viết</h1>;
    }
  };
  return (
    <div className="actions">
      {renderActionsHeading()}
      <CreateUpdate action={action} slug={slug} />
    </div>
  );
};

CreateUpdatePage.propTypes = {};

export default CreateUpdatePage;
