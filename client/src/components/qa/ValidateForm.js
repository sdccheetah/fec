export const validate = (form, component, categories) => {
  let errors = {};

  if (component === 'reviews') {
    if (!form.rating) errors.rating = 'an overall rating';

    if (!form.recommend) errors.recommend = 'a recommended input';

    if (!form.name) errors.name = 'a nickname';

    if (!form.summary) errors.summary = 'a review summary';

    if (form.body.length < 50) errors.body = 'a review body over 50 characters';

    //if given characteristics is not equal to product characteristics, add error

    if (
      Object.keys(form.characteristics).length !==
      Object.keys(categories).length
    )
      errors.characteristics = 'valid characteristics';

    //check if characteristics exist
  } else {
    if (component === 'question') {
      if (!form.question || form.question === '')
        errors.question = 'a question';
    } else {
      if (!form.answer || form.answer === '') errors.answer = 'a answer';
    }

    if (!form.name || form.name === '') errors.name = 'a nickname';
  }
  return Object.keys(errors).length ? errors : false;
};
