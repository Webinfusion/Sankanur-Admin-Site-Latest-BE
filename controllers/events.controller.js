const supabase = require('../services/supabase');

// Sayeesh Changes
const getAllPreEvents = async (req, res) => {
	const { data, error } = await supabase
  .from('PreEvents')
  .select()
  res.send({ data ,error })
}

const getAllPostEvents = async (req, res) => {
	const { data, error } = await supabase
  .from('PostEvents')
  .select();
  res.send({ data ,error })
}

const getOnePreEvent = async (req, res) => {
    const {event_num } = req.params;
    const response = await supabase
    .from('PreEvents')
    .select('*')
    .eq('event_num', event_num)
    res.send(response)
  }

const getOnePostEvent = async (req, res) => {
    const {event_num } = req.params;
    const response = await supabase
    .from('PostEvents')
    .select('*')
    .eq('event_num', event_num)
    res.send(response)
  }

  const updateEvent = async (req, res) => {
    try {
      const updatedData = req.body; 
      const  id  = updatedData.id; 
  
      const {event_type} = req.params;

      console.log("Event Type = ",event_type)
      if(event_type=='pre') {
        var tableName = 'PreEvents';
      } else if(event_type=='post') {
        var tableName = 'PostEvents';
      } else {
        return
      }

      const { data, error } = await supabase
        .from(tableName)
        .update(updatedData) 
        .eq('id', id); 
  
      res.status(200).json({
        message: 'Event updated successfully',
        updatedData: updatedData,
      });
    } catch (err) {
      console.error('Unexpected Error:', err.message);
      res.status(500).json({ error: 'Internal server error', details: err.message });
    }
  };
  

  const insertEvent = async (req, res) => {
    try {
      const newData = req.body; 
      const { table } = req.params;
      var tableName;
      if(table=='pre') {
        tableName = 'PreEvents';
      } else if(table=='post'){
        tableName = 'PostEvents';
      } else {
        res.status(500).json({ error: 'Internal server error', details: err.message });
        return
      }
      
      // Insert the new record into the "PostEvents" table
      const { data, error } = await supabase
        .from(tableName)
        .insert([newData]);
  
      // Handle errors from Supabase
      if (error) {
        console.error('Supabase Error:', error.message);
        return res.status(400).json({ error: error.message });
      }
  
      // Success response
      res.status(201).json({
        message: 'Event inserted successfully',
        insertedData: data,
      });
    } catch (err) {
      console.error('Unexpected Error:', err.message);
      res.status(500).json({ error: 'Internal server error', details: err.message });
    }
  };
  
  
  

module.exports = {
    getAllPreEvents,
    getAllPostEvents,
    getOnePreEvent,
    getOnePostEvent,
    updateEvent,
    insertEvent
}