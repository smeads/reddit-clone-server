import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";

export interface GraphQLContext {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
}
