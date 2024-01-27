import { supabase } from "db.js";

async function slotbook(slotid, email, machine_name) {
  try {
    checkAndUpdateSlotStatus()
    const { data: existingSlot, error } = await supabase
      .from('slots')
      .select('Reserved_By', 'end_time')
      .eq('slotid', slotid)
      .single();

    if (error) {
      throw new Error(`Error fetching slot information: ${error.message}`);
    }

    if (existingSlot && existingSlot.Reserved_By) {
      console.log(`Slot ${slotid} is already reserved by ${existingSlot.Reserved_By}`);
      return;
    }

    const { data: updatedSlot, error: updateError } = await supabase
      .from('slots')
      .update({
        Reserved_By: email,
      })
      .eq('slotid', slotid)
      .single();

    if (updateError) {
      throw new Error(`Failed to book slot ${slotid}. Error: ${updateError.message}`);
    }

    if (updatedSlot) {
      console.log(`Slot ${slotid} booked successfully by ${email} for machine ${machine_name}`);
      return;
    } else {
      console.error(`Failed to book slot ${slotid}.`);
    }
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
}

async function checkAndUpdateSlotStatus() {
  try {
    const currentTime = new Date();
    const { data: outdatedSlots, error } = await supabase
      .from('slots')
      .select('slotid', 'end_time', 'Reserved_By')
      .lte('end_time', currentTime.toISOString());

    if (error) {
      throw new Error(`Error fetching outdated slots: ${error.message}`);
    }

    if (outdatedSlots && outdatedSlots.length > 0) {
      for (const outdatedSlot of outdatedSlots) {
        if (outdatedSlot.Reserved_By) {
          await supabase
            .from('slots')
            .update({ Reserved_By: null })
            .eq('slotid', outdatedSlot.slotid);
        }
      }
    }
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
}
