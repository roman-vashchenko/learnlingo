export const selectTeachers = (state) => state.teachers.items;
export const selectFavoriteTeachers = (state) => state.teachers.favoriteItems;
export const selectVisibleTeachers = (state) => state.teachers.visibleTeachers;
export const selectLoading = (state) => state.teachers.isLoader;
export const selectError = (state) => state.teachers.error;
