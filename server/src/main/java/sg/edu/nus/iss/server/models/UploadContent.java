package sg.edu.nus.iss.server.models;

public record UploadContent(Integer id, String description, 
    String contentType, byte[] content) {
    
}
