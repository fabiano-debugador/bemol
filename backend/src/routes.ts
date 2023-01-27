import { Router } from "express";
import { createUserController } from "./UseCase/User/CreateUser";
import { listUserController } from "./UseCase/User/ListUser";

import { createChannelController } from "./UseCase/Channel/CreateChannel";
import { listChannelController } from "./UseCase/Channel/ListChannel";

import { createRelationUserChannelController } from "./UseCase/RelationUserChannel/CreateRelationUserChannel";
import { listRelationUserChannelController } from "./UseCase/RelationUserChannel/ListRelationUserChannel";
import { getRelationUserChannelByUserController } from "./UseCase/RelationUserChannel/GetRelationUserChannel";
import { updateRelationUserChannelController } from "./UseCase/RelationUserChannel/UpdateRelationUserChannel";

const route = Router();

route.get("/users", (req, resp) => {
  return listUserController.handle(req, resp);
});

route.post("/users", (req, resp) => {
  return createUserController.handle(req, resp);
});

route.get("/channels", (req, resp) => {
  return listChannelController.handle(req, resp);
});

route.post("/channels", (req, resp) => {
  return createChannelController.handle(req, resp);
});

route.get("/relationUsers", (req, resp) => {
  return listRelationUserChannelController.handle(req, resp);
});

route.get("/relationUsers/:userId", (req, resp) => {
  return getRelationUserChannelByUserController.handle(req, resp);
});

route.post("/relationUsers", (req, resp) => {
  return createRelationUserChannelController.handle(req, resp);
});

route.put("/relationUsers/:id", (req, resp) => {
  return updateRelationUserChannelController.handle(req, resp);
});

export { route };
