import { notifications } from '@helpers/notifications';
import { getUserInfo } from '@store/user/selectors';
import React, { useState, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import Input from '@common/Input';
import { changeUserInfo, freezeUserInfo, unFreezeUserInfo, submitChangeUserInfo } from '@store/user/actions';
import Button from '@common/Button';
import { StAFWrapper, StAFAvatar, StAFFields, StAFLabel, StAFAvaContainter, StChanges } from './styled';

const AdditionalFields: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { age, city, name, lastName } = useSelector(getUserInfo);
  const [changeble, setChangeble] = useState(false);
  const handleChanges = () => {
    if (!changeble) dispatch(freezeUserInfo());
    if (changeble) dispatch(unFreezeUserInfo());
    setChangeble(!changeble);
  };
  const handleAvatarClick = () => {
    if (changeble) {
      notifications({ type: 'warn', message: 'no_change_avatar' });
    }
  };
  const handleOnChangeAge = (value: string) => {
    dispatch(changeUserInfo({ field: 'age', value }));
  };
  const handleOnChangeName = (value: string) => {
    dispatch(changeUserInfo({ field: 'name', value }));
  };
  const handleOnChangeLastName = (value: string) => {
    dispatch(changeUserInfo({ field: 'lastName', value }));
  };
  const handleOnChangeCity = (value: string) => {
    dispatch(changeUserInfo({ field: 'city', value }));
  };

  const handleSubmit = () => {
    if (!age && !name && !lastName && !age) return;
    dispatch(submitChangeUserInfo());
  };

  return (
    <StAFWrapper>
      <StChanges src={changeble ? 'assets/img/crest.png' : 'assets/img/pen.png'} onClick={handleChanges} />
      <StAFAvaContainter>
        <StAFAvatar src="assets/img/defaultAvatar.png" onClick={handleAvatarClick} changeble={changeble}/>
      </StAFAvaContainter>
      <StAFFields>
        <StAFLabel>
          <p>{t('name')}</p>
          {changeble ? (
            <Input
              type="text"
              value={name}
              onChange={handleOnChangeName}
              placeholder={name || 'void_field'}
              borderRadius="15px"
              width="80%"
              borderWidth="3px"
              textAlignInput="center"
              color='white'
              inputHeight="50px"
            />
          ) : <p>{name || t('void_field')}</p>}
        </StAFLabel>
        <StAFLabel>     
          <p>{t('lastName')}</p>
          {changeble ? (
            <Input
              type="text"
              value={lastName}
              onChange={handleOnChangeLastName}
              placeholder={lastName || 'void_field'}
              borderRadius="15px"
              width="80%"
              borderWidth="3px"
              textAlignInput="center"
              color='white'
              inputHeight="50px"
            />
          )
            : (
              <p>
                {lastName || t('void_field')}
              </p>
            )}
        </StAFLabel>
        <StAFLabel>     
          <p> 
            {t('city') }
          </p>
          {changeble ? (
            <Input
              type="text"
              value={city}
              onChange={handleOnChangeCity}
              placeholder={city || 'void_field'}
              borderRadius="15px"
              width="80%"
              borderWidth="3px"
              textAlignInput="center"
              color='white'
              inputHeight="50px"
            />
          )
            : <p>{city || t('void_field')}</p>}
        </StAFLabel>
        <StAFLabel>     
          <p> 
            {t('age')}
          </p>
          {changeble ? (
            <Input
              type="text"
              value={age}
              onChange={handleOnChangeAge}
              placeholder={age || 'void_field'}
              borderRadius="15px"
              width="80%"
              borderWidth="3px"
              textAlignInput="center"
              color='white'
              inputHeight="50px"
            />
          )
            : <p>{age || t('void_field')}</p>}
        </StAFLabel>
      </StAFFields>
      {changeble && (
        <Button
          disabled={!age && !name && !lastName && !age}
          onClick={handleSubmit}
          translateKey="submit"
          position='absolute'
          bottom='100px' 
          right="150px"
          width="150px"
          height="50px"
        />
      )}
    </StAFWrapper>
  );
};

export default AdditionalFields;
