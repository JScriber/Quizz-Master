import { findAll, findOne, post, put, remove } from '../db/question-db';

/**
 * Service to manipulate question.
 */
export class QuestionManager {

  /** Get the unique instance of the question manager. */
  static getInstance() {
    if (!QuestionManager.instance) {
      QuestionManager.instance = new this();
    }

    return QuestionManager.instance;
  }

  /**
   * Get the list of all the questions.
   * @param {*} [id] - Optional ID.
   * @returns {*} - One or multiple elements if ID.
   */
  get(id) {
    if (id !== undefined) {
      return findOne(id);
    } else {
      return findAll();
    }
  }

  /**
   * Deletes the element with the ID.
   * @param {*} id
   */
  deleteOne(id) {
    return remove(id);
  }

  /**
   * Saves the question.
   * @param {*} body - Informations on the question. If contains an ID, a put will be done.
   * @returns {*} - Response.
   */
  async save(body) {
    const persistAction = body.id
      ? (async () => await put(body))
      : (async () => await post(body));

    return this.persist(body, persistAction);
  }

  /**
   * Persists the given element.
   * @param {*} body - Body of the element.
   * @param {*} persistAction - Action to execute to persist the element.
   * @returns response
   */
  async persist(body, persistAction) {

    const response = {
      success: true
    };

    const { title, goodAnswer, badAnswer1, badAnswer2, badAnswer3, hint, category, difficulty } = body;

    if (title && goodAnswer && badAnswer1 && badAnswer2 && badAnswer3 && hint && category && difficulty) {

      if (this.containDuplicate([ goodAnswer, badAnswer1, badAnswer2, badAnswer3 ])) {
        response.success = false;
        response.errors = [ 'Des champs sont dupliqués.' ];
      } else {
        persistAction(body);
      }
    } else {
      response.success = false;
      response.errors = [
        'Vous devez renseigner tous les champs.'
      ];
    }

    return response;
  }

  /**
   * Says if the list contains duplicated elements.
   * @param {*} lists
   */
  containDuplicate(lists) {
    // TODO: Implement.

    return false;
  }
}
