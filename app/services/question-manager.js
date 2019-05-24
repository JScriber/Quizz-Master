import { findAll, findOne } from "../db/question-db";

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

  /** Get the list of all the questions. */
  getAll() {
    return findAll();
  }

  /** Get one question. */
  getOne(id) {
    return findOne(id);
  }
}
