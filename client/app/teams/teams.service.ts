namespace app {

interface ITeamsResourceClass extends ITeams, ng.resource.IResource<ITeamsResourceClass>{}
interface ITeamsResource extends ng.resource.IResourceClass<ITeamsResourceClass>{}

export class TeamService {

  private TeamsResource: ITeamsResource;


public getAll() {
      return this.TeamsResource.query();
    }



  constructor (
    $resource: ng.resource.IResourceService
  ){
    this.TeamsResource = <ITeamsResource>$resource("/api/v1/teams/:id")



  }
}
angular.module("app").service("TeamService", TeamService);
}
