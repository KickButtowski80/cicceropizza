require 'yaml'
class GreenSideLunchMenuConfig
    def self.current_menu
        current_menu = load_menu
    end
    def self.load_menu
        YAML.load(File.read("#{Rails.root.to_s}/config/greensidelunchmenu.yml"))
    end
end