export class SnapModel{

  constructor(public title: String,
              public description: String,
              public imageUrl: String,
              public createdDate: Date,
              public snaps: number,
              public location?: String) {}
}
