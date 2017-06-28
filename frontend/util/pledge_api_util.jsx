export const createPledge = pledge => {
  return $.ajax({
    method: 'POST',
    url: '/api/pledges',
    data: {pledge}
  });
};
