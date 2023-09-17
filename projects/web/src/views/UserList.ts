// importing views
import { CollectionView } from './CollectionVew';
import { UserShow } from './UserShow';
// importing models
import { User, UserProps } from '../models/User';

// -------------------------------------------

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
