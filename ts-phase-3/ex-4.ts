interface User {
  id : number;
  name : string;
  email : string;
  active : boolean;
}

type UserPreview = Pick<User, "id" | "name" | "active">;
type UserUpdate = Partial<Omit<User, "id">>
type UserRecord = Record<number, User>
type ReadonlyUser = Readonly<User>
