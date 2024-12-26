import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F0F4F8',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#FF69B4',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 14,
    color: '#555',
  },
  editButton: { 
    padding: 10, 
    backgroundColor: '#fda4af',
    borderRadius: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  statBox: {
    alignItems: 'center',
    justifyContent:'center'
  },
  statLabel: {
    fontSize: 14,
    color: '#FF69B4',
    fontWeight: 'bold',
    marginTop: 5,
  },
  statText: {
    fontSize: 16,
    color: '#333',
    marginTop: 2,
  },
  statIcon: {
    width: 32,
    height: 32,
    marginBottom: 4,
    color:'#FF69B4'
  },
  menuContainer: {
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  menuText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#333',
  },
  logoutItem: {
    borderTopWidth: 1,
    borderTopColor: '#EDEDED',
  },
  logoutText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default styles;
