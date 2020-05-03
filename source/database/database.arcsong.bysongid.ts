export default (songid: string): Promise<IDatabaseArcSong> => {

  const _sql: string =
    'SELECT * FROM `songs` WHERE `sid` == ?';

  // execute sql
  return DATABASE_ARCSONG.get(_sql, [songid])
    .then((data: IDatabaseArcSong | null) => {

      if (!data) return null;

      data.rating_pst /= 10;
      data.rating_prs /= 10;
      data.rating_ftr /= 10;

      return data;

    });

}
