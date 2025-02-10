
const supabase = require('../services/supabase');

const readData = async (req, res) => {
	const { data, error } = await supabase
  .from('countries')
  .select()
  res.send({ data ,error })
}

const getAdmissions = async (req, res) => {
	const { data, error } = await supabase.from('applications').select().order('created_at', { ascending : false });
	res.send({ data ,error });
}

const deleteAdmissionForm = async (req, res) => {
  const id = req.params.id;
  // const response = await supabase
  // .from('countries')
  // .delete()
  // .eq('id', 1)
  // res.send(response)
  res.send({ id })
}

const getAdmissionById = (req, res) => {}

module.exports = { readData, getAdmissions, getAdmissionById, deleteAdmissionForm }