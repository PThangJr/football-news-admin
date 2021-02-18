import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchCreateNew } from '../../app/store/slice/createNewSlice';
import InputControl from '../../components/form/controls/InputControl';
import PropTypes from 'prop-types';
import SelectControl from '../../components/form/controls/SelectControl';
import queryString from 'query-string';
import { fetchNewBySlug } from '../../app/store/slice/newsSlice';
import Swal from 'sweetalert2';

const CreateUpdate = (props) => {
  const { action, slug } = props;
  const [content, setContent] = useState('');
  const newsData = useSelector((state) => state.news).data;
  const dispatch = useDispatch();
  const history = useHistory();
  const form = useForm({
    defaultValues: {
      title: '',
      thumbnail: '',
      tournament: '',
      topic: '',
    },
    mode: 'onBlur',
  });
  useEffect(() => {
    if (action === 'update') {
      const fetchCN = async () => {
        const config = {
          // tournament: '/',
          slug,
        };
        const newBySlugDispacth = await dispatch(fetchNewBySlug(config));
        const newBySlug = unwrapResult(newBySlugDispacth).data;
        console.log(newBySlug);
      };
      fetchCN();
    }
  }, []);
  // console.log(newsData);

  const handleSubmit = async (values) => {
    const dataNew = {
      ...values,
      content,
    };
    try {
      const data = await dispatch(fetchCreateNew(dataNew));
      const newCreated = unwrapResult(data);
      if (newCreated) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1000,
        });
        history.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action="" onSubmit={form.handleSubmit(handleSubmit)}>
      <InputControl
        valueUpdate={newsData ? newsData.title : ''}
        form={form}
        label="Tiêu đề"
        type="text"
        placeholder="Tiêu đề bài viết..."
        name="title"
      />
      <InputControl
        valueUpdate={newsData ? newsData.thumbnail : ''}
        form={form}
        label="Thumbnail"
        type="text"
        placeholder="Link thumbnail..."
        name="thumbnail"
      />
      <InputControl
        valueUpdate={newsData ? newsData.topic : ''}
        form={form}
        label="Topic"
        type="text"
        placeholder="Nhập Topic..."
        name="topic"
      />

      <div className="input-group mt-20">
        <label htmlFor="" className="input-label">
          Nội dung
        </label>
        <CKEditor
          editor={ClassicEditor}
          data={newsData ? newsData.content : content}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
          }}
        />
      </div>

      <div className="select-group">
        <SelectControl name="tournament" form={form} />
      </div>
      <div className="form-option">
        <div className="form-option-btn">
          <button type="submit" className="btn btn--green">
            {action === 'create' ? 'Thêm' : action === 'update' ? 'Cập nhật' : ''}
          </button>
          <button type="reset" className="btn btn--orange">
            Reset
          </button>
        </div>
      </div>
      {/* <button onClick={handleCreateNew} type="submit">
        Submit
      </button> */}
    </form>
  );
};
CreateUpdate.propTypes = {
  action: PropTypes.string,
};

export default CreateUpdate;
