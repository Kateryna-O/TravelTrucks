import { useForm } from 'react-hook-form';
import sprite from '../../assets/icon/sprite.svg';
import css from './SearchForm.module.css';

export const SearchForm = ({ onResults }) => {
  const { register, handleSubmit, setValue, watch } = useForm({
    mode: 'onTouched',
  });

  const handleCheckboxChange = event => {
    const { id, checked } = event.target;
    setValue(id, checked);
  };

  const isACChecked = watch('AC', false);
  const isTransmissionChecked = watch('transmission', false);
  const isKitchenChecked = watch('kitchen', false);
  const isTVChecked = watch('TV', false);
  const isBathroomChecked = watch('bathroom', false);
  const isRadioChecked = watch('radio', false);
  const isRefrigeratorChecked = watch('refrigerator', false);
  const isMicrowaveChecked = watch('microwave', false);
  const isGasChecked = watch('gas', false);
  const isWaterChecked = watch('water', false);
  const selectedVehicleType = watch('form', '');

  const onSubmit = data => {
    // фільтруємо лише ті поля, що мають значення
    const filters = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value && value !== false)
    );

    console.log('Filters:', filters);
    if (onResults) {
      onResults(filters); // передаємо фільтри батьківському компоненту
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <div className={css.wrapperLocation}>
        <label htmlFor="location" className={css.labelLocation}>
          Location
        </label>
        <svg className={css.iconMap}>
          <use href={`${sprite}#icon-Map`} />
        </svg>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Kyiv, Ukraine"
          {...register('location')}
          className={css.location}
        />
      </div>
      <h3 className={css.labelFilters}>Filters</h3>
      <div>
        <h2 className={css.subtitle}>Vehicle equipment</h2>
        <hr className={css.line} />
        <div className={css.wrapperVehicle}>
          <label
            className={`${css.labelCheck} ${isACChecked ? css.active : ''}`}
          >
            <input
              type="checkbox"
              name="checkboxVehicle"
              id="AC"
              {...register('AC')}
              className={css.hiddenCheckbox}
              onChange={handleCheckboxChange}
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-wind`}></use>
            </svg>
            AC
          </label>

          <label
            className={`${css.labelCheck} ${isTransmissionChecked ? css.active : ''}`}
          >
            <input
              type="checkbox"
              name="checkboxVehicle"
              id="transmission"
              {...register('transmission')}
              className={css.hiddenCheckbox}
              onChange={handleCheckboxChange}
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-diagram`}></use>
            </svg>
            Automatic
          </label>

          <label
            className={`${css.labelCheck} ${isKitchenChecked ? css.active : ''}`}
          >
            <input
              type="checkbox"
              name="checkboxVehicle"
              id="kitchen"
              {...register('kitchen')}
              className={css.hiddenCheckbox}
              onChange={handleCheckboxChange}
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-cup`}></use>
            </svg>
            Kitchen
          </label>

          <label
            className={`${css.labelCheck} ${isTVChecked ? css.active : ''}`}
          >
            <input
              type="checkbox"
              name="checkboxVehicle"
              id="TV"
              {...register('TV')}
              className={css.hiddenCheckbox}
              onChange={handleCheckboxChange}
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-computer`}></use>
            </svg>
            TV
          </label>

          <label
            className={`${css.labelCheck} ${isBathroomChecked ? css.active : ''}`}
          >
            <input
              type="checkbox"
              name="checkboxVehicle"
              id="bathroom"
              {...register('bathroom')}
              className={css.hiddenCheckbox}
              onChange={handleCheckboxChange}
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-droplet`}></use>
            </svg>
            Bathroom
          </label>
          <label
            className={`${css.labelCheck} ${isRadioChecked ? css.active : ''}`}
          >
            <input
              type="checkbox"
              name="checkboxVehicle"
              id="radio"
              {...register('radio')}
              className={css.hiddenCheckbox}
              onChange={handleCheckboxChange}
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-radio`}></use>
            </svg>
            Radio
          </label>

          <label
            className={`${css.labelCheck} ${isRefrigeratorChecked ? css.active : ''}`}
          >
            <input
              type="checkbox"
              name="checkboxVehicle"
              id="refrigerator"
              {...register('refrigerator')}
              className={css.hiddenCheckbox}
              onChange={handleCheckboxChange}
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-refrigerator`}></use>
            </svg>
            Refrigerator
          </label>

          <label
            className={`${css.labelCheck} ${isMicrowaveChecked ? css.active : ''}`}
          >
            <input
              type="checkbox"
              name="checkboxVehicle"
              id="microwave"
              {...register('microwave')}
              className={css.hiddenCheckbox}
              onChange={handleCheckboxChange}
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-microwave`}></use>
            </svg>
            Microwave
          </label>

          <label
            className={`${css.labelCheck} ${isGasChecked ? css.active : ''}`}
          >
            <input
              type="checkbox"
              name="checkboxVehicle"
              id="gas"
              {...register('gas')}
              className={css.hiddenCheckbox}
              onChange={handleCheckboxChange}
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-gas`}></use>
            </svg>
            Gas
          </label>

          <label
            className={`${css.labelCheck} ${isWaterChecked ? css.active : ''}`}
          >
            <input
              type="checkbox"
              name="checkboxVehicle"
              id="water"
              {...register('water')}
              className={css.hiddenCheckbox}
              onChange={handleCheckboxChange}
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-water`}></use>
            </svg>
            Water
          </label>
        </div>
      </div>
      <div>
        <h2 className={css.subtitle}>Vehicle type</h2>
        <hr className={css.line} />
        <div className={css.wrapperType}>
          <label
            className={`${css.labelCheck} ${selectedVehicleType === 'Van' ? css.active : ''}`}
          >
            <input
              type="radio"
              name="form"
              id="Van"
              value="van"
              {...register('form')}
              className={css.hiddenCheckbox}
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-grid2`}></use>
            </svg>
            Van
          </label>

          <label
            className={`${css.labelCheck} ${css.minMargin} ${selectedVehicleType === 'FullyIntegrated' ? css.active : ''}`}
          >
            <input
              type="radio"
              name="form"
              id="FullyIntegrated"
              value="fullyIntegrated"
              {...register('form')}
              className={css.hiddenCheckbox}
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-grid`}></use>
            </svg>
            Fully Integrated
          </label>

          <label
            className={`${css.labelCheck} ${selectedVehicleType === 'Alcove' ? css.active : ''}`}
          >
            <input
              type="radio"
              name="form"
              id="Alcove"
              value="alcove"
              {...register('form')}
              className={css.hiddenCheckbox}
            />
            <svg className={css.icon}>
              <use href={`${sprite}#icon-grid3`}></use>
            </svg>
            Alcove
          </label>
        </div>
      </div>

      <button type="submit" className={css.submitButton}>
        Search
      </button>
    </form>
  );
};
