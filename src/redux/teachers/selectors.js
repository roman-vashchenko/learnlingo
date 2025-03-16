export const selectTeachers = (state) => state.teachers.items;
export const selectError = (state) => state.teachers.error;
export const selectLoading = (state) => state.teachers.isLoader;
export const selectFavoriteTeachers = (state) => state.teachers.favoriteItems;
export const selectTotalTeachers = (state) => state.teachers.totalTeachers;
export const selectVisibleTeachers = (state) => state.teachers.visibleTeachers;
