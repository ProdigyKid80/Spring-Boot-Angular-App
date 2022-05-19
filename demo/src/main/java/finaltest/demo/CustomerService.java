package finaltest.demo;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.*;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.*;

@Service
public class CustomerService {	
	
	List<Customer> customerList = new ArrayList<Customer>();
	
	public List<Customer> getCustomers() throws JsonParseException, JsonMappingException, IOException {
		
		ObjectMapper mapper = new ObjectMapper();
		mapper.registerModule(new JavaTimeModule());

		customerList = mapper.readValue(new File("src/main/resources/mockdata.json"), new TypeReference<List<Customer>>() {});		
		return customerList;
	}

	public void addNewCustomer(Customer customer) throws JsonParseException, JsonMappingException, IOException {		
	    File file = new File("src/main/resources/mockdata.json");
	    ObjectMapper mapper = new ObjectMapper();
	    mapper.registerModule(new JavaTimeModule());
	    
	    customerList = mapper.readValue(new File("src/main/resources/mockdata.json"), new TypeReference<List<Customer>>() {});
	    customerList.add(customer);
	    
	    try {
	        JsonGenerator g = mapper.getFactory().createGenerator(new FileOutputStream(file));

	        mapper.writeValue(g, customerList);
	        g.close();
	    } catch (IOException e) {
	        e.printStackTrace();
	    }
	}

}
