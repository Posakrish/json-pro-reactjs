export const UPDATE_REMARK = "UPDATE_REMARK";


export const updateRemark = (id, remark) => ({
  type: UPDATE_REMARK,
  payload: {
    id,
    remark,
  },
});